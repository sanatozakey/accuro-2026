const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const emailService = require('./emailService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const contactsFile = path.join(dataDir, 'contacts.json');

// Initialize contacts file if it doesn't exist
if (!fs.existsSync(contactsFile)) {
  fs.writeFileSync(contactsFile, JSON.stringify([], null, 2));
}

// Helper function to read contacts
const readContacts = () => {
  try {
    const data = fs.readFileSync(contactsFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

// Helper function to write contacts
const writeContacts = (contacts) => {
  try {
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing contacts:', error);
    return false;
  }
};

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Create contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, inquiryType, productInterest, subject, message } = req.body;

    // Validation
    const errors = [];

    if (!firstName || !firstName.trim()) {
      errors.push({ field: 'firstName', message: 'First name is required' });
    }

    if (!lastName || !lastName.trim()) {
      errors.push({ field: 'lastName', message: 'Last name is required' });
    }

    if (!email || !email.trim()) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (!phone || !phone.trim()) {
      errors.push({ field: 'phone', message: 'Phone number is required' });
    }

    if (!subject || !subject.trim()) {
      errors.push({ field: 'subject', message: 'Subject is required' });
    }

    if (!message || !message.trim()) {
      errors.push({ field: 'message', message: 'Message is required' });
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    // Read existing contacts
    const contacts = readContacts();

    // Create new contact
    const newContact = {
      _id: Date.now().toString() + Math.random().toString(36).substring(7),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company?.trim() || '',
      inquiryType: inquiryType?.trim() || '',
      productInterest: productInterest?.trim() || '',
      subject: subject?.trim() || '',
      message: message.trim(),
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to contacts array
    contacts.push(newContact);

    // Save to file
    const saved = writeContacts(contacts);

    if (!saved) {
      return res.status(500).json({
        success: false,
        message: 'Failed to save contact'
      });
    }

    console.log(`New contact received from: ${firstName} ${lastName} (${email})`);

    // Send email notification
    try {
      await emailService.sendContactNotification(newContact);
      console.log(`Email notification sent to ${process.env.NOTIFICATION_EMAIL}`);
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Don't fail the request if email fails, just log it
    }

    res.status(201).json({
      success: true,
      data: newContact,
      message: 'Contact saved successfully'
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Server error occurred'
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', (req, res) => {
  try {
    const contacts = readContacts();
    res.json({
      success: true,
      data: contacts,
      count: contacts.length
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// Get single contact by ID
app.get('/api/contacts/:id', (req, res) => {
  try {
    const contacts = readContacts();
    const contact = contacts.find(c => c._id === req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║   Accuro Backend Server                   ║
║   Server running on port ${PORT}           ║
║   http://localhost:${PORT}                 ║
╚═══════════════════════════════════════════╝
  `);
  console.log('API Endpoints:');
  console.log('  GET  /api/health');
  console.log('  POST /api/contacts');
  console.log('  GET  /api/contacts');
  console.log('  GET  /api/contacts/:id');
  console.log('');
});

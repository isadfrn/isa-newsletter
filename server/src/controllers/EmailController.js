const EmailRepository = require('../repositories/EmailRepository');
const EmailService = require('../service/EmailService');

class EmailController {
  async save(request, response) {
    const { email } = request.body;

    const emailRepository = new EmailRepository();
    const emailService = new EmailService(emailRepository);

    await emailService.save({ email });

    return response.status(201).json();
  }
}
module.exports = EmailController;

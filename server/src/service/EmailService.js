class EmailService {
  constructor(emailRepository) {
    this.emailRepository = emailRepository;
  }

  async save({ email }) {
    const emailExists = await this.emailRepository.findEmail(email);

    if (!emailExists) {
      const emailCreated = await this.emailRepository.save(email);
      return emailCreated;
    } else {
      return;
    }
  }
}

module.exports = EmailService;

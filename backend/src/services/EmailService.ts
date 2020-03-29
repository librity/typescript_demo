interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  // ? means param might not be present
  // attachment?: Array<string>
  attachment?: string[];
}

// DTO: Data Transfer Object
// DDD: Domain-driven design
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

// class EmailService {
//   sendMail(to: IMailTo, message: IMailMessage) {
//     console.log(`Email sent to ${to.name}: ${message.subject}!`);
//   }
// }

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email sent to ${to.name}: ${message.subject}!`);
  }
}

export default EmailService;

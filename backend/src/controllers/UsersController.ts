import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { id: 1, name: 'Luisito', email: 'asdsad@dsadad.com' },
  { id: 2, name: 'Andrew', email: 'asdsad@dsadad.com' },
  { id: 3, name: 'Joseph', email: 'asdsad@dsadad.com' },
  { id: 4, name: 'Johnny' },
];

// export default {
//   async index(req: Request, res: Response) {
//     return res.json(users);
//   },
// };

// class UsersController {
//   static async index(req: Request, res: Response) {
//     return res.json(users);
//   }
// }

// export default  UsersController;

class UsersController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    // const to = { name: 'Moxie', email: 'moxie@sas.com' };
    // const message = { subject: 'Good stuff', body: 'Where can I buy some?' };

    // emailService.sendMail(to, message);

    emailService.sendMail({
      to: {
        name: 'Moxie',
        email: 'moxie@sas.com',
      },
      message: {
        subject: 'Good stuff',
        body: 'Where can I buy some?',
      },
    });

    return res.json({ message: 'ok' });
  }
}

export default new UsersController();

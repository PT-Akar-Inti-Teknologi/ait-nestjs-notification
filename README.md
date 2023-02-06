<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/126/126816.png" width="75">
</p>

# Notification Modules
Notification Module is a collection of modules or services that handle specific tasks and can be used in other modules or services that require such as:
- Sending email
- Sending SMS/OTP

### How to install
```
yarn add https://github.com/PT-Akar-Inti-Teknologi/ait-nestjs-notification.git
```
## Service/Module Email
We can use this module for sending email (email relay), using both standard SMPT protocols and email service providers such as: mailgun, sendgrid, mailgun, sendinblue and mailtrap.

Using this module/service all we have to do is register the notification module and configure the credentials in the main module as follows:

```
# PROVIDER SUPPORT [mailtrap, sendinblue, mailgun, sendgrid, and standard smtp protocol]

@Module({
  imports: [
    EmailModule.register({
      transport: {
        host: '',
        port: '',
        auth: {
          user: '',
          pass: '',
        },
      },
      defaults: {
        from: '',
      },
    }),
  ],
})

```
After defining the credentials in the environment variables, the next step is that we can use this service/module by injecting (DI) it into another service or controller that needs it.

```
import { Injectable } from '@nestjs/common';
import { EmailService } from '@ait/nestjs-notification';

@Injectable()
export class AppService {

  constructor(private readonly mailService: EmailService) {}

  sendMail(options: any) {
    return this.mailService.send(options);
  }
}

```
in the options parameter, there are minimum attributes that must be set, including:
```
{
  to: <email destination | string or array string[] for multiple recepient>,
  subject: <email subject | string>,
  body: <email body bisa berupa text/html>
}
```
In addition there are several attributes that we can use (optional), including:
```
{
  ...
  cc: <email cc | string or array string>,
  bcc: <email bcc | string or array string>,
  attachments: <email attachment | list object filename, path>
}
```
### Module Dependency
```
@nestjs-modules/mailer
@nestjs/config
```

## Service/Module SMS
This module or service allows us to send SMS or OTP using a Citcall or Twilio provider.
Using this module/service all we have to do is register the notification module and configure the credentials in the main module as follows:

```
@Module({
  imports: [
    SmsModule.register({
      provider: '',
      apiKey: '',
      apiSecret: '',
      from: '',
    }),
  ],
})
```

we can use this service/module by injecting (DI) it into another service or controller that needs it.

```
import { Injectable } from '@nestjs/common';
import { EmailService } from '@ait/nestjs-notification';

@Injectable()
export class AppService {

  constructor(private readonly smsService: SmsService) {}

  sendSMS(phoneNumber: string, message: string) {
    return this.smsService.sendSMS(phoneNumber, message);
  }
}
```
## Contributors
- sabbanaait <mailto: sabbana.azmi@akarinti.tech>
- andrew_ongi <mailto: andrew@akarinti.tech>

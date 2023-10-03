package org.punkmap.gateway.registration.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@RequiredArgsConstructor
@Component
public class EmailSender {

    public void sendConfirmationEmail(String confirmationCode, String recipientEmail) {
        String host = "smtp.elasticemail.com";
        int port = 2525;
        String username = "spbu.punkmap@gmail.com";
        String password = "113F1ABE0ED8903E8C8D6A33D09AFAD612E8";

        String fromEmail = "spbu.punkmap@gmail.com";
        String toEmail = recipientEmail;

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
            message.setSubject("Подтверждение регистрации");
            message.setText("Пожалуйста, подтвердите вашу регистрацию, перейдя по ссылке:\n" +
                    "https://localhost:8079/register/confirmation/" + confirmationCode + "\n\n");

            Transport.send(message);

            System.out.println("Письмо успешно отправлено.");
        } catch (MessagingException e) {
            System.out.println("Ошибка при отправке письма: " + e.getMessage());
        }

    }

}

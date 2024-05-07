import React from "react";

import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text><strong>Name:</strong> {firstName} {lastName}</Text>
              <Text><strong>Email:</strong> {email}</Text>
              <Text><strong>Phone Number:</strong> {phoneNumber}</Text>
              <Text><strong>Message:</strong> {message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

declare module '@emailjs/browser' {
  interface EmailJSResponse {
    status: number;
    text: string;
  }

  interface EmailJSStatic {
    sendForm(
      serviceId: string,
      templateId: string,
      form: HTMLFormElement,
      publicKey: string
    ): Promise<EmailJSResponse>;
  }

  const emailjs: EmailJSStatic;
  export default emailjs;
} 
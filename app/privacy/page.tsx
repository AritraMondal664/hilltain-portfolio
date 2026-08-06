import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Hilltain Group',
  description: 'Privacy Policy for Hilltain Group website.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-dark pt-20">
      <div className="container mx-auto px-container-md md:px-container-lg py-20">
        <h1 className="display-lg mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-4xl space-y-6">
          <section>
            <h2 className="heading-md mb-4">Introduction</h2>
            <p className="body-lg text-text-secondary">
              Hilltain Group respects your privacy. This privacy policy explains how we collect,
              use, and protect your personal information.
            </p>
          </section>

          
        </div>
      </div>
    </main>
  );
}

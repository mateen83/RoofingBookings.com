export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading font-bold text-lg text-foreground">
            RoofingBookings<span className="text-primary">.com</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} RoofingBookings. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Predictable bookings for premium roofing companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
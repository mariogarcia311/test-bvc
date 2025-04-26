export const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FinTech Digital. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

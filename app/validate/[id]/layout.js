import "../../globals.css";

export default function ValidateLayout({ children }) {
  return (
    <section>
      {children}
      <div className="text-center text-[#4B4F58] pt-10 pb-6">
        <p>© 2024 DappNode. All Rights Reserved.</p>
      </div>
    </section>
  );
}

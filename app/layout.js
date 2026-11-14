export const metadata = {
  title: "دیوار پلاس",
  description: "خرید و فروش آسان و سریع"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{margin:0,background:"#f7f7f7",fontFamily:"Tahoma, sans-serif"}}>
        {children}
      </body>
    </html>
  );
}

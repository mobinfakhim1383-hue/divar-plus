export default function Home() {
  return (
    <main dir="rtl" style={{fontFamily:"Tahoma",padding:20,maxWidth:700,margin:"auto"}}>
      <h1 style={{color:"#b42318"}}>دیوار پلاس</h1>
      <p>خرید و فروش آسان، سریع و مطمئن</p>

      <input
        placeholder="جستجوی آگهی..."
        style={{width:"100%",padding:14,borderRadius:10,border:"1px solid #ddd"}}
      />

      <h2>دسته‌بندی‌ها</h2>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        {["وسایل نقلیه","املاک","لوازم خانه","موبایل","خدمات","استخدام"].map(item => (
          <button key={item} style={{padding:12,borderRadius:10,border:"1px solid #ddd",background:"white"}}>
            {item}
          </button>
        ))}
      </div>

      <h2>آگهی‌های جدید</h2>
      <p>هنوز آگهی‌ای ثبت نشده است.</p>

      <button style={{background:"#b42318",color:"white",padding:15,border:0,borderRadius:10,width:"100%"}}>
        ثبت آگهی جدید +
      </button>
    </main>
  );
          }

import Image from "next/image";
import Link from "next/link";
import Logo from "./images/school-logo.png";
import Menu from "../components/Menu";
import Nav from "../components/Nav";

export default function DashboardLayout({ children }) {
  const styles = {
    container: "h-screen flex",
    left: {
      responsive: "w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]", // Responsive widths
      colors: "bg-white", // Color for the left side
      logo: "flex items-center justify-center lg:justify-start gap-2", // Flex layout for the logo
      logoText: "hidden lg:block text-slate-900 font-bold", // Hide text on small screens, show on larger
    },
    right: {
      responsive: "w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll", // Responsive widths
      colors: "bg-gray-100", // Color for the right side
    },
  };

  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={`${styles.left.responsive} ${styles.left.colors}`}>
        <Link href="/" className={styles.left.logo}>
          <Image src={Logo} alt="School Logo" width={32} height={32} />
          <span className={styles.left.logoText}>Apna School</span>
        </Link>
        <Menu />
      </div>
      {/* Right */}
      <div className={`${styles.right.responsive} ${styles.right.colors}`}>
        <Nav />
        {children}
      </div>
      {/* Dashboard{children} */}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Logo from "./images/school-logo.png";
import Menu from "../components/Menu";

export default function DashboardLayout({ children }) {
  const styles = {
    container: "h-screen flex",
    left: {
      responsive: "w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]", // Responsive widths
      colors: "bg-red-200", // Color for the left side
      logo: "flex items-center justify-center lg:justify-start gap-2", // Flex layout for the logo
      logoText: "hidden lg:block", // Hide text on small screens, show on larger
    },
    right: {
      responsive: "w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]", // Responsive widths
      colors: "bg-green-200", // Color for the right side
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
        Right
      </div>
      {/* Dashboard{children} */}
    </div>
  );
}

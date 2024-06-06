import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MenuItems = ({
  setIsShopMenuOpen,
  menus,
  setHoverIndex,
  isMobileMenuOpen,
  toggleMobileMenu
}: any) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex lg:justify-start	md:justify-start justify-center ${
        isMobileMenuOpen ? `flex-col gap-5` : `flex-row gap-10`
      } relative md:gap-5`}
    >
      {isMobileMenuOpen && (
        <div className="flex justify-end pr-5">
          <button onClick={toggleMobileMenu}>
            <Image
              src="/images/XCircle.svg"
              width={25}
              height={25}
              alt="XCircle"
            />
          </button>
        </div>
      )}
      {menus.map((data: any, index: any) => (
        <div
          className={`cursor-pointer ${pathname === data.link ? 'highlight' : ''}`}
          key={index}
          onMouseEnter={() => {
            if (!isMobileMenuOpen) {
              setIsShopMenuOpen(data.menus.length > 1);
              setHoverIndex(index);
            }
          }}
        >
          <Link href={data.link}>
            <p onClick={toggleMobileMenu}>{data.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;

import Link from "next/link";
import { forwardRef } from "react";

interface MenulinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}


const Menulink = forwardRef<HTMLAnchorElement, MenulinkProps>((props, ref) => {
  Menulink.displayName = "Menulink";
  let { href, children, ...rest } = props;
  return (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  );
});

export default Menulink;
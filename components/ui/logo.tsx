import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="block w-24 mt-10"
      aria-label="IDBS"
    >
      <img
        src="/images/idbs_logo_light.png"
        alt="idbs logo"
      />
    </Link>
  );
}

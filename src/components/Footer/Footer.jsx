import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Footer = () => {
  const { state } = useContext(AuthContext);
  const { english } = state;
  return (
    <div>
      <div className="w-full text-center mt-4 pt-10 bg-black text-white p-10 ">
        {english ? (
          <p>
            Copyright &copy; by STAM In Life Manikganj Technical School and
            College Branch All rights &apos; reserved
          </p>
        ) : (
          <p>
            স্বত্ব &copy; STAM In Life মানিকগঞ্জ টেকনিক্যাল স্কুল ও কলেজ শাখা
            কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        )}
      </div>
    </div>
  );
};

export default Footer;

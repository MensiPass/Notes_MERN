import React, { useState } from "react";
import ProfileInfo from "../../components/Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
interface Props {
  userInfo: string;
  onSearchNote: (item: string) => {};
  handleClearSearch: () => void;
}
const Navbar = ({ userInfo, onSearchNote, handleClearSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };
  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
        handleSearch={() => handleSearch()}
        onClearSearch={() => onClearSearch()}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};
export default Navbar;

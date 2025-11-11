import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
         <div className="max-w-5xl mx-auto flex justify-between items-center py-6">
            <div className="flex items-center">
                 <Link to="/" className="font-bold text-2xl">LDD Portal</Link>
            </div>

            <div className="flex gap-6">
                 <Link to="/portal">Portal</Link>
                 <Link to="/highlight">Highlight</Link>
                 <Link to="/profile">Profile</Link>
            </div>

         </div>
    </nav>
  );
}

export default Navbar;

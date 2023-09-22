import { ShoppingCartIcon } from "@heroicons/react/24/outline"

function Header() {
    return (
        <div className="navbar bg-base-100 shadow md:px-10">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-primary text-xl">StockNikalo</a>
            </div>
            <div className="flex-none gap-4">
                <div className="form-control hidden md:block">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <ShoppingCartIcon className="h-8 w-8" />
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-primary">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
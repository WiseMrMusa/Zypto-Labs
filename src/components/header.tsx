import { ConnectKitButton } from "connectkit";
import NavBar from "./nav-bar";

export default function Header(){
    return(
        <div>
            
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
        <NavBar />
        <ConnectKitButton showAvatar={true} />
     </div>
        </div>
    )
}

// label ?: string;
// showBalance ?: boolean;
// showAvatar ?: boolean;
// theme ?: Theme;
// mode ?: Mode;
// customTheme ?: CustomTheme;
// onClick ?: (open: () => void) => void;
// };
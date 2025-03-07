import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { IHeaderNavigation } from "@app/interfaces/header-navigation";

interface IProps {
  navigations: IHeaderNavigation[];
}

const HeaderNavigation: React.FC<IProps> = ({ navigations }) => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {navigations.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          )}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                className={navigationMenuTriggerStyle()}
              >
                {item.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderNavigation;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Forms from './pages/Forms';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Tables from './pages/Tables';
import Utilities from './pages/Utilities';

// Sidebar, Footer ve navbar componentlarını import ediyoruz.
import { Sidebar, SidebarLogo, SidebarItem, SidebarItemDropdown, SidebarItemDropdownItem, SidebarItems } from './components/Sidebar';
import { Navbar, NavbarLeft, NavbarRight, NavbarAuth } from './components/Navbar';
import { Footer, FooterList, FooterMenu, FooterMenuHeader, FooterMenuItem, FooterMenuLink, FooterUpper } from './components/Footer';

const App = () => {
    return (
      <>
      <Router>
        <Sidebar>
          <SidebarLogo src="/src/uilogo.png"></SidebarLogo>
          <SidebarItems>
            <SidebarItem to="/" icon="fa-regular fa-dashboard" text="Gösterge Paneli"></SidebarItem>
            <SidebarItem to="/tables" icon="fa-regular fa-table" text="Tables"></SidebarItem>
            <SidebarItem to="/forms" icon="fa-regular fa-lock-a" text="Forms"></SidebarItem>
            <SidebarItem to="/utilities" icon="fa-regular fa-bell" text="Utilities"></SidebarItem>
            <SidebarItemDropdown icon="fa-regular fa-arrows-retweet" text="Dropdown">
              <SidebarItemDropdownItem to="/">Dropdown item</SidebarItemDropdownItem>
              <SidebarItemDropdownItem to="/">Dropdown item</SidebarItemDropdownItem>
              <SidebarItemDropdownItem to="/">Dropdown item</SidebarItemDropdownItem>
              <SidebarItemDropdownItem to="/">Dropdown item</SidebarItemDropdownItem>
            </SidebarItemDropdown>
            <SidebarItem to="/signin" icon="fa-regular fa-key" text="Giriş Yap"></SidebarItem>
            <SidebarItem to="/signup" icon="fa-regular fa-user-plus" text="Kayıt Ol"></SidebarItem>
            <SidebarItem logout={true} to="/" icon="fa-regular fa-sign-out" text="Çıkış Yap"></SidebarItem>
          </SidebarItems>
        </Sidebar>
          <div class="SeyfMain">
              <Navbar>
                <NavbarLeft><div class="SeyfUIText">SEYFUI</div></NavbarLeft>
                <NavbarRight>
                  <NavbarAuth>
                    <Link to="signin" class="NavbarLogin Button ButtonTransparent"><i class="fa-duotone fa-right-to-bracket"></i> Login</Link>
                    <Link to="signup" class="NavbarRegister Button"><i class="fa-solid fa-user-plus"></i> Sign Up</Link>
                  </NavbarAuth>
                </NavbarRight>
              </Navbar>
              <div class="SeyfMainContent">
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/forms" element={<Forms />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/tables" element={<Tables />} />
                  <Route path="/utilities" element={<Utilities />} />
              </Routes>
              </div>
              <Footer>
                <FooterUpper>İLERİ İNTERNET PROGRAMLAMA (2023-2024 GÜZ)</FooterUpper>
                <FooterList>
                  <FooterMenu>
                    <FooterMenuHeader>ÖĞRENCİLER</FooterMenuHeader>
                    <FooterMenuItem><b>SEYFETTİN NARMAN</b> / 202013709015</FooterMenuItem>
                    <FooterMenuItem><b>ALİ İMRAN ÇELİK</b> / 202013709072</FooterMenuItem>
                  </FooterMenu>
                  <FooterMenu>
                    <FooterMenuHeader>MENÜ</FooterMenuHeader>
                    <FooterMenuLink to="/"><i class="fa-regular fa-dashboard"></i> Gösterge Paneli</FooterMenuLink>
                    <FooterMenuLink to="/tables"><i class="fa-regular fa-table"></i> Tables</FooterMenuLink>
                    <FooterMenuLink to="/forms"><i class="fa-regular fa-lock-a"></i> Forms</FooterMenuLink>
                    <FooterMenuLink to="/utilities"><i class="fa-regular fa-bell"></i> Utilities</FooterMenuLink>
                  </FooterMenu>
                  <FooterMenu>
                    <FooterMenuHeader>İLETİŞİM</FooterMenuHeader>
                    <FooterMenuItem><i class="fa-light fa-envelope"></i> iletisim@site.com</FooterMenuItem>
                    <FooterMenuItem><i class="fa-light fa-phone-volume"></i> +90 (532) 123 45 67</FooterMenuItem>
                    <FooterMenuItem><i class="fa-light fa-fax"></i> +90 (312) 123 45 67</FooterMenuItem>
                  </FooterMenu>
                  <FooterMenu>
                    <FooterMenuHeader>RESMİ</FooterMenuHeader>
                    <FooterMenuItem>Altıeylül / Balıkesir</FooterMenuItem>
                    <FooterMenuItem>Koşullar</FooterMenuItem>
                    <FooterMenuItem>Gizlilik Politikası</FooterMenuItem>
                  </FooterMenu>
                </FooterList>
              </Footer>
          </div>
      </Router>
      </>
    );
};

export default App;
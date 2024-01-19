import { FormItem } from '../components/Form';
import { Box, AuthPage, AuthBoxBody, AuthBoxOther, LoginBox } from '../components/Box';
import SeyfButton from '../components/SeyfButton'
const SignUp = () => {
    return (
        <AuthPage>
            <LoginBox header="Giriş Yap">
                <AuthBoxBody>
                    <form>
                        <FormItem label="Ad Soyad" type="text" name="text" icon="fa-regular fa-user"></FormItem>
                        <FormItem label="E-posta adresi" type="email" name="email" icon="fa-regular fa-envelope"></FormItem>
                        <FormItem label="Şifre" type="password" name="password" icon="fa-regular fa-lock"></FormItem>
                        <FormItem label="Şifre Tekrar" type="password" name="password2" icon="fa-regular fa-lock"></FormItem>
                        <div className="AuthBoxButton">
                            <SeyfButton color="Green" type="submit"><i className="fa-regular fa-user-plus"></i> Kayıt Ol</SeyfButton>
                        </div>
                    </form>
                </AuthBoxBody>
                <AuthBoxOther>
                    <SeyfButton className="AuthBoxOtherButton" color="Green"><i class="fa-light fa-user-plus"></i> Kayıt Ol</SeyfButton>
                </AuthBoxOther>
            </LoginBox>
        </AuthPage>
    );
};

export default SignUp;
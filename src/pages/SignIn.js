import { FormItem } from '../components/Form';
import { Box, AuthPage, AuthBoxBody, AuthBoxOther, LoginBox } from '../components/Box';
import SeyfButton from '../components/SeyfButton'
const SignIn = () => {
    return (
        <AuthPage>
            <LoginBox header="Giriş Yap">
                <AuthBoxBody>
                    <form>
                        <FormItem label="E-posta adresi" type="email" name="email"></FormItem>
                        <FormItem label="Şifre" type="password" name="password"></FormItem>
                        <FormItem label="E-posta adresi" type="email" name="email" icon="fa-regular fa-envelope"></FormItem>
                        <FormItem label="Şifre" type="password" name="password" icon="fa-regular fa-lock"></FormItem>
                        <div className="AuthBoxButton">
                            <SeyfButton color="Green" type="submit"><i className="fa-regular fa-sign-in"></i> Giriş Yap</SeyfButton>
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

export default SignIn;
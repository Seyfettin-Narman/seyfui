import SeyfButton from '../components/SeyfButton';
import Badge from '../components/Badge';
import AlertBox from '../components/AlertBox';
import { Box } from '../components/Box';


const Utilities = () => {
    return (
        <Box>
            <h5>Butonlar</h5>
            <br />
            <SeyfButton color="Green">Yeşil</SeyfButton>
            <br />
            <SeyfButton color="Red">Kırmızı</SeyfButton>
            <br />
            <SeyfButton color="Orange">Turuncu</SeyfButton>
            <br />
            <SeyfButton color="Blue">Mavi</SeyfButton>
            <br />
            <br />
            <h5>Badges</h5>
            <br />
            <Badge color="Green">Yeşil</Badge>
            <br />
            <br />
            <Badge color="Red">Kırmızı</Badge>
            <br />
            <br />
            <Badge color="Orange">Turuncu</Badge>
            <br />
            <br />
            <Badge color="Blue">Mavi</Badge>
            <br />
            <br />
            <br />
            <h5>Uyarılar</h5>
            <br />
            <AlertBox color="Green">Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil Yeşil </AlertBox>
            <AlertBox color="Red">Kırmızı</AlertBox>
            <AlertBox color="Orange">Turuncu</AlertBox>
            <AlertBox color="Blue">Mavi</AlertBox>
        </Box>
    );
};

export default Utilities;
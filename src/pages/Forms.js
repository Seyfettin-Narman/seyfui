import { FormItem, SelectBox, SelectOption } from '../components/Form';
import { Box } from '../components/Box';


const Forms = () => {
    return (
        <Box>
            <h5>Input türleri</h5>
            <br />
            <h6>Iconsuz labelsiz input</h6>
            <br />
            <FormItem></FormItem>
            <br />
            <br />
            <h6>Iconsuz labelli input</h6>
            <br />
            <FormItem label="Test label"></FormItem>
            <br />
            <br />
            <h6>Iconlu labelsiz input</h6>
            <br />
            <FormItem icon="fa-regular fa-user"></FormItem>
            <br />
            <br />
            <h6>Iconlu labelli input</h6>
            <br />
            <FormItem label="Test label" icon="fa-regular fa-dollar-sign"></FormItem>
            <br />
            <h5>Select Box</h5>
            <br />
            <SelectBox>
                <SelectOption>Lütfen seçiniz</SelectOption>
                <SelectOption value="1">a</SelectOption>
                <SelectOption value="1">a</SelectOption>
                <SelectOption value="1">a</SelectOption>
            </SelectBox>
            <br />
        </Box>
    );
};

export default Forms;
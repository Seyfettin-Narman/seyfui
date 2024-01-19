
import { Box, Boxes, DashboardBox, DashboardBoxInfo, DashboardBoxIcon } from '../components/Box';
import { Table, TableBox, TableBoxHeader, TableTr, TableTh, TableTd, TableUser, TableInfo, TableActions } from '../components/Table';
import SeyfButton from '../components/SeyfButton';
import Badge from '../components/Badge';
const Tables = () => {
    return (
        <>
            <TableBox>
                <TableBoxHeader title="Klasik Tablo">
                    <SeyfButton className="TableBoxHeaderButton" color="Orange"><i class="fa-regular fa-add"></i> Ekle</SeyfButton>
                </TableBoxHeader>
                <Table>
                    <TableTr>
                        <TableTh>#</TableTh>
                        <TableTh className="SeyfTabloUser">Üye</TableTh>
                        <TableTh>Rol</TableTh>
                        <TableTh>Durum</TableTh>
                        <TableTh>Tarih</TableTh>
                        <TableTh>İşlem</TableTh>
                    </TableTr>
                    <TableTr>
                        <TableTd>2</TableTd>
                        <TableUser img="/src/uilogo.png" name="SEYFETTIN NARMAN" email="seyfo@narman.com"></TableUser>
                        <TableInfo header="YAZILIMCI" text="Full-Stack"></TableInfo>
                        <TableTd><Badge color="Green">AÇIK</Badge></TableTd>
                        <TableTd>19.01.2024</TableTd>
                        <TableActions>
                            <SeyfButton color="Red"><i class="fa-regular fa-trash"></i></SeyfButton>
                            <SeyfButton color="Blue"><i class="fa-regular fa-pencil"></i></SeyfButton>
                        </TableActions>
                    </TableTr>
                </Table>
            </TableBox>
        </>
    );
};

export default Tables;
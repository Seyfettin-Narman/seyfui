import { Box, Boxes, DashboardBox, DashboardBoxInfo, DashboardBoxIcon } from '../components/Box';
import { Table, TableBox, TableBoxHeader, TableTr, TableTh, TableTd, TableUser, TableInfo, TableActions } from '../components/Table';
import SeyfButton from '../components/SeyfButton';
import Badge from '../components/Badge';
const Dashboard = () => {
    let Uyeler = [
        {
            id: 1,
            user: {
                "img": "/src/seyf.png",
                "name": "SEYFETTIN NARMAN",
                "email": "seyf@narman.com"
            },
            job: {
                "title": "YAZILIMCI",
                "subtitle": "Full-Stack"
            },
            active: true,
            date: "19.01.2024"
        },
        {
            id: 2,
            user: {
                "img": "/src/uilogo.png",
                "name": "ALİ İMRAN ÇELİK",
                "email": "ali@imran.com"
            },
            job: {
                "title": "YAZILIMCI",
                "subtitle": "Full-Stack"
            },
            active: false,
            date: "19.01.2024"
        },
        {
            id: 3,
            user: {
                "img": "/src/seyf.png",
                "name": "SEYFETTIN NARMAN",
                "email": "seyf@narman.com"
            },
            job: {
                "title": "YAZILIMCI",
                "subtitle": "Full-Stack"
            },
            active: null,
            date: "19.01.2024"
        }
    ]
    return (
        <>
            <Boxes>
                <DashboardBox rows="4">
                    <DashboardBoxInfo header="Toplam kazanç" content="$105.455,12"></DashboardBoxInfo>
                    <DashboardBoxIcon color="Red" icon="fa fa-dollar-sign"></DashboardBoxIcon>
                </DashboardBox>
                <DashboardBox rows="4">
                    <DashboardBoxInfo header="Toplam kazanç" content="$105.455,12"></DashboardBoxInfo>
                    <DashboardBoxIcon color="Green" icon="fa fa-dollar-sign"></DashboardBoxIcon>
                </DashboardBox>
                <DashboardBox rows="4">
                    <DashboardBoxInfo header="Toplam kazanç" content="$105.455,12"></DashboardBoxInfo>
                    <DashboardBoxIcon color="Orange" icon="fa fa-dollar-sign"></DashboardBoxIcon>
                </DashboardBox>
                <DashboardBox rows="4">
                    <DashboardBoxInfo header="Toplam kazanç" content="$105.455,12"></DashboardBoxInfo>
                    <DashboardBoxIcon color="Blue" icon="fa fa-dollar-sign"></DashboardBoxIcon>
                </DashboardBox>
            </Boxes>
            <TableBox>
                <TableBoxHeader title="Örnek Başlık">
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

                    {Uyeler.map((uye) => (
                        <TableTr key={uye.id}>
                            <TableTd>{uye.id}</TableTd>
                            <TableUser
                                img={uye.user.img}
                                name={uye.user.name}
                                email={uye.user.email}></TableUser>
                            <TableInfo
                                header={uye.job.title}
                                text={uye.job.subtitle}></TableInfo>
                            <TableTd>
                                {uye.active !== null ? (
                                    <Badge color={uye.active ? 'Green' : 'Red'}>
                                    {uye.active ? 'AÇIK' : 'KAPALI'}
                                    </Badge>
                                ) : (
                                    <Badge>
                                    Bilinmiyor
                                    </Badge>
                                )}
                            </TableTd>
                            <TableTd>{uye.date}</TableTd>
                            <TableActions>
                                <SeyfButton color="Red">
                                    <i className="fa-regular fa-trash"></i>
                                </SeyfButton>
                                <SeyfButton color="Blue">
                                    <i className="fa-regular fa-pencil"></i>
                                </SeyfButton>
                            </TableActions>
                        </TableTr>
                        ))}
                </Table>
            </TableBox>
        </>
    );
};

export default Dashboard;
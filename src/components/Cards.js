import Card from './Card'
import Grid from '@mui/material/Grid'

export default function Cards({ nasaData }) {
    return (
        <>
            <Grid container spacing={5} style={{ paddingLeft: "30px", marginTop: '1vh', marginBottom: '50px', width: "100vw" }} wrap="no-wrap">
                {nasaData.map(photoData => {
                    return (<Grid item key={photoData.id} xs={12} md={6} lg={4}>
                        <Card photoData={photoData} />
                    </Grid>)
                })}
            </Grid>
        </>
    )
}
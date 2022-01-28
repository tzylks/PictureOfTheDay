import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react'

export default function PhotoCard({ photoData }) {
    
    const [iconColor, setIconColor] = useState(false)

    const hoverColor = () => setIconColor(!iconColor);

    return (
        <>
            <Card sx={{ background: '#91C483', color: 'white', border: '3px solid black' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'black' }} aria-label="photo">
                            {photoData.title[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={photoData.title}
                    subheader={photoData.date}
                    sx={{ background: '#91C483', color: 'white' }}
                />
                <CardMedia
                    component="img"
                    image={photoData.url}
                    alt="photo"
                    sx={{ minHeight: 375 }}
                />
                <CardContent sx={{ background: '#91C483', color: 'white' }}>
                    <Typography variant="body2" color="text.secondary">
                        {photoData.explanation}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <FavoriteIcon onClick={hoverColor} sx={{ color: iconColor ? 'red' : 'gray' }} />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    )
}


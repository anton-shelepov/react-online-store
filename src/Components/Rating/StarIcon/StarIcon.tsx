import s from './StarIcon.module.scss';

interface IStarIcon { 
    fill?: string;
}

const StarIcon: React.FC<IStarIcon> = ({fill = 'lightgray'}) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="13.000000pt" height="13.000000pt" viewBox="0 0 128.000000 128.000000"
            preserveAspectRatio="xMidYMid meet"> 
            <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill={fill} stroke="none">
                <path d="M549 1153 c-34 -70 -76 -160 -93 -198 l-33 -70 -194 -29 c-107 -16
                -202 -33 -212 -38 -10 -5 -17 -20 -17 -36 0 -21 21 -48 96 -122 52 -52 118
                -120 145 -151 l49 -57 -34 -208 c-36 -223 -35 -244 10 -244 15 0 105 43 200
                96 l175 96 173 -96 c95 -53 185 -96 199 -96 46 0 47 21 11 244 l-34 208 59 67
                c33 36 98 104 145 151 66 65 86 91 86 112 0 15 -6 30 -12 35 -7 4 -103 22
                -212 38 l-199 31 -91 195 c-90 190 -92 194 -124 197 l-33 3 -60 -128z"/>
            </g>
        </svg>

    )
}

export default StarIcon;
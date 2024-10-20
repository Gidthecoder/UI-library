import {smallFont, normalFont, largeFont, textColor, darkNeutral, linkColor } from './utils'
import {Globe, FollowIcon} from './icons'

interface PostSenderProps {
    profileName:string, 
    level:string, bio:string, 
    date:string
}

export default function PostSender({profileName, level, bio, date}:PostSenderProps){
    return (
      <div className='flex flex-row py-2 items-center'>

        <img src='/linkedin/gid.jpg' className="w-12 h-12 rounded-full" />

        <div className='ml-2.5 w-3/5 mr-auto'>

          <p className={normalFont}>
            <span style={{color: textColor,fontWeight:'bold'}}>{profileName}</span> 
            <span style={{color: darkNeutral}}>&nbsp;&#x2022;&nbsp;{level}</span>
          </p>
          <p style={{color: darkNeutral}} className={`${smallFont} truncate w-full`}>{bio}</p>
          <p style={{color: darkNeutral}} className={`flex flex-row items-center ${smallFont}`}>
            <span>{date}</span> 
            <span>&nbsp;&#x2022;&nbsp;</span> 
            <Globe/>
          </p>

        </div>

        <div className='flex flex-row items-center p-1 hover:bg-[#a3d1ff] rounded-sm cursor-pointer'>
          <FollowIcon/>
          <p className={largeFont} style={{color: linkColor,fontWeight:'bold'}}>&nbsp;Follow</p>
        </div>
      </div>
  
    )
  }
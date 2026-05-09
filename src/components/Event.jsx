import React from 'react'
import { Link } from 'react-router-dom'

const IconWrapper = ({ children }) => (
  <svg
    viewBox="0 0 96 96"
    className="w-[86px] h-[86px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
)

const DecorationIcon = () => (
  <IconWrapper>
    <path d="M48 44L36 82" />
    <path d="M48 44L60 82" />
    <path d="M48 44V82" />
    <path d="M36 62h24l-5 21H41z" />
    <path d="M30 35c-7-7 4-17 12-8c3-11 17-11 20 0c8-9 19 1 12 8" />
    <path d="M31 35c0 8 11 10 17 3c6 7 17 5 17-3" />
  </IconWrapper>
)

const CakeIcon = () => (
  <IconWrapper>
    <path d="M32 70h32" />
    <path d="M27 80h42" />
    <path d="M34 54h28v16H34z" />
    <path d="M40 40h16v14H40z" />
    <path d="M48 31v9" />
    <path d="M43 28c0-4 5-9 5-9s5 5 5 9c0 3-2 5-5 5s-5-2-5-5z" />
    <path d="M34 58c3 4 7 4 10 0c3 4 7 4 10 0c3 4 7 4 10 0" />
  </IconWrapper>
)

const CateringIcon = () => (
  <IconWrapper>
    <circle cx="48" cy="50" r="20" />
    <circle cx="48" cy="50" r="12" />
    <path d="M20 28v45" />
    <path d="M14 28v18" />
    <path d="M20 28v18" />
    <path d="M26 28v18" />
    <path d="M14 46h12" />
    <path d="M76 29v44" />
    <path d="M76 29c8 10 8 22 0 30" />
  </IconWrapper>
)

const VenueIcon = () => (
  <IconWrapper>
    <path d="M24 82V56a24 24 0 0 1 48 0v26" />
    <path d="M36 82V58a12 12 0 0 1 24 0v24" />
    <path d="M24 62h12" />
    <path d="M60 62h12" />
    <path d="M24 72h12" />
    <path d="M60 72h12" />
    <path d="M48 16c4-8 15-4 15 4c0 9-15 17-15 17s-15-8-15-17c0-8 11-12 15-4z" />
  </IconWrapper>
)

const PhotographerIcon = () => (
  <IconWrapper>
    <rect x="28" y="42" width="34" height="24" rx="2" />
    <circle cx="38" cy="42" r="8" />
    <circle cx="54" cy="42" r="8" />
    <path d="M62 48l14-8v28l-14-8z" />
    <path d="M45 66v16" />
    <path d="M36 82l9-16l9 16" />
  </IconWrapper>
)

const EventManagerIcon = () => (
  <IconWrapper>
    <path d="M48 32c5-9 19-4 19 7c0 12-19 24-19 24S29 51 29 39c0-11 14-16 19-7z" />
    <path d="M26 44c-4-7-14-3-14 5c0 8 14 16 14 16s8-5 12-12" />
    <path d="M70 44c4-7 14-3 14 5c0 8-14 16-14 16s-8-5-12-12" />
    <path d="M48 63v20" />
    <path d="M26 65c0 8 4 11 4 17" />
    <path d="M70 65c0 8-4 11-4 17" />
  </IconWrapper>
)

const CarIcon = () => (
  <IconWrapper>
    <path d="M21 61h54l-6-14H52l-10-9H31L21 61z" />
    <path d="M21 61h-4c-3 0-5-2-5-5v-4h9" />
    <path d="M75 61h4" />
    <circle cx="34" cy="66" r="7" />
    <circle cx="66" cy="66" r="7" />
    <path d="M40 47h14" />
    <path d="M55 47l10 9" />
  </IconWrapper>
)

const InvitationIcon = () => (
  <IconWrapper>
    <path d="M34 22h30v58H34z" />
    <path d="M64 22v20H44" />
    <path d="M49 54c3-6 12-3 12 4c0 8-12 15-12 15S37 66 37 58c0-7 9-10 12-4z" />
  </IconWrapper>
)

const Event = () => {
  const services = [
    { icon: <DecorationIcon />, title: "Decoration" },
    { icon: <CakeIcon />, title: "Cakes" },
    { icon: <CateringIcon />, title: "Catering" },
    { icon: <VenueIcon />, title: "Venue" },
    { icon: <PhotographerIcon />, title: "Photographer" },
    { icon: <EventManagerIcon />, title: "Event Manager" },
    { icon: <CarIcon />, title: "Cars" },
    { icon: <InvitationIcon />, title: "Invitations" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10 mb-[50px]">

      <div className="text-center">
        <h2 className="text-[#ff0037] text-2xl md:text-3xl font-extrabold uppercase tracking-[0.14em]">
          Plan Your Wedding Event
        </h2>

        <h3 className="text-[#2b2f36] text-2xl md:text-[28px] font-bold mt-1">
          Keep It The Way, You Like.
        </h3>

        <p className="max-w-[760px] mx-auto mt-6 text-[15px] text-gray-700 leading-relaxed">
          Providing Special Services For Our Valued Users. We Implement Your Plan According To Desires.
          <br className="hidden sm:block" />
          Give Us Your Plan, We Implement For You.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 mt-14">
        {services.map((item, index) => (
          <Link
            to="/signup"
            key={index}
            className="justify-self-center bg-white rounded-[24px] flex flex-col items-center justify-center text-center w-full max-w-[250px] h-[220px] shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(255,0,55,0.18)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-[#ff0037]">
              {item.icon}
            </div>

            <p className="mt-5 font-medium text-[#ff0037] text-[15px]">
              {item.title}
            </p>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Event
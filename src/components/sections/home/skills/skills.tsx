export const SkillsComp = ({ skills }:{skills:string[]}) => {
  return <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-theme-text-accent'>
    {
      skills.map((ele, index) => {
        return <div
          key={'dailySkill' + index}
          className='flex text-xl font-normal py-3 pr-1'
        >
          <div className='pr-2 text-theme-accent font-bold'>{'»'}</div>
          <p>{ele}</p>
        </div>
      })
    }
  </div>
}

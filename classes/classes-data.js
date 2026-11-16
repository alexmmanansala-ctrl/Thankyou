/* =====================================================================
   CE CLASS LIST AND SETTINGS
   This is the only file to edit when classes change.

   To add a class, copy one block between { and }, and change the details.
   - date:  year-month-day, for example '2026-12-09'
   - start / end: 24-hour time, for example '09:00' or '13:30'
   - core:  true shows a "Core" label, false hides it
   Classes disappear from the page by themselves the day after they happen.
   ===================================================================== */
window.JF_CE = {

  /* Where registrations are sent. Leave empty ('') until Atlas is connected:
     while it is empty the page works as a preview and sends nothing. */
  endpoint: '',

  classes: [
    {
      id: '2026-11-04-water-pipes-electrical',
      date: '2026-11-04', start: '11:00', end: '12:00',
      title: 'Water Pipes & Electrical',
      core: false,
      venue: 'The Lance Group Real Estate',
      address: '19 W Main St, Santaquin, UT 84655'
    },
    {
      id: '2026-11-10-indoor-air-quality',
      date: '2026-11-10', start: '11:00', end: '12:00',
      title: 'Indoor Air Quality',
      core: true,
      venue: 'Coldwell Banker Realty',
      address: '354 West Center Street, Orem, UT 84057'
    },
    {
      id: '2026-11-11-mold-prelisting-lead-paint',
      date: '2026-11-11', start: '09:00', end: '12:00',
      title: 'Mold, Pre-Listing & Seller Inspections, and Lead Paint in the Home',
      core: false,
      venue: 'UCAR',
      address: '1031 W Center Street, Suite 100, Orem, UT 84057'
    },
    {
      id: '2026-11-12-radon',
      date: '2026-11-12', start: '11:00', end: '12:00',
      title: 'Radon',
      core: true,
      venue: 'Berkshire Hathaway HomeServices Elite Real Estate (South County)',
      address: '543 UT-198, Salem, UT 84653'
    }
  ]
};

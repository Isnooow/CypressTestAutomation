describe('Header', () => {
  beforeEach(() => {
    cy.config("defaultCommandTimeout", 30000)
    cy.viewport(1920, 1080)
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
  })

  it('Logo Dealls', () => {
    cy.get('a[aria-label="Dealls"]').first().should('be.visible').click();
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/')
    cy.go('back')
    cy.url().should('include', '/mentoring')
  })

  it('Menu Loker', () => {
    cy.contains('a', 'Loker').should('be.visible').click()
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/')
    cy.go('back')
    cy.url().should('include', '/mentoring')
  })

  it('Menu Peusahaan', () => {
    cy.contains('a', 'Perusahaan').should('be.visible').click();
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/karir')
    cy.go('back')
    cy.url().should('include', '/mentoring');
  })

  it('Menu Event', () => {
    cy.contains('li', 'Events').should('be.visible').click({ force: true })
    cy.get('.ant-popover-content').should('be.visible')
  })

  it('Menu AI CV Analyzer', () => {
    cy.contains('a', 'AI CV Analyzer').should('be.visible').click();
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/cv-reviewer')
    cy.go('back');
    cy.url().should('include', '/mentoring')
  })

  it('Menu Menjadi mentor', () => {
    cy.contains('a', 'Menjadi mentor').should('be.visible').click()
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentor')
    cy.go('back')
    cy.url().should('include', '/mentoring')
  })

  it('Menu Masuk', () => {
    cy.get('#dealls-navbar-login-btn').click()
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2Fmentoring')
    cy.go('back')
    cy.url().should('include', '/mentoring')
  })

  it('Menu Daftar', () => {
    cy.get('#dealls-navbar-register-btn').click()
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-up')
    cy.go('back')
    cy.url().should('include', '/mentoring')
  })

})

describe('Body', () => {
  beforeEach(() => {
    cy.config("defaultCommandTimeout", 30000)
    cy.viewport(1920, 1080)
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
  })

  it('Banner', () => {
    cy.get('.HeroTitleSubtitle_title_subtitle__GlZkf').should('be.visible')
    cy.get('aside').should('be.visible')
  })

  it('Navbar', () => {
    cy.contains('a', 'Sesi').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring/my-session')
    })
    cy.contains('a', 'Eksplor').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    })
  })

  it('Search bar', () => {
    cy.get('.ant-input-prefix').should('be.visible')
    cy.get('#searchMentor').should('be.visible').type('coba')
    cy.get('.ant-input-clear-icon').should('be.visible').click()
    cy.get('.DropdownSelectFilter_dropdown_filter__9v6e7').should('be.visible').click().then(() => { 
      if (cy.get('.ant-select-selector').should('be.visible')) {
        expect(true).to.be.true
      }
     })
     cy.contains('.ant-checkbox-wrapper', 'Manager').click()
     cy.contains('.ant-checkbox-wrapper', 'Manager').find('input').should('be.checked')
     cy.contains('button', 'Reset').first().click()
     cy.get('.ant-checkbox-input').should('not.be.checked')
     cy.get('.ant-select-arrow').eq(1).should('be.visible').click({force: true}).then(() => { 
      if (cy.get('.ant-select-dropdown').should('be.visible')) {
        expect(true).to.be.true
      }
     })
  })

  it('Tabbar Karir and Akademik', () => {
    cy.contains('a', 'Karier').should('be.visible').click().then(() => {
      cy.get('.swiper.swiper-initialized.swiper-horizontal').should('be.visible')
      cy.get('.swiper-slide.swiper-slide-active').should('be.visible').find('a[href="/mentoring"]').contains('All').first().click()
      cy.get('.swiper-slide.swiper-slide-next').should('be.visible').find('a[href="/mentoring?mCategory=64c777a528a97ad2795b7eeb"]').first().click()
      cy.get('.swiper-slide').contains('Art & Design').should('be.visible').click()
      cy.get('.swiper-slide').contains('Business').should('be.visible').click()
      cy.get('.swiper-slide').contains('Data').should('be.visible').click()
      cy.get('.swiper-slide').contains('Finance').should('be.visible').click()
      cy.get('.swiper-slide').contains('HR').should('be.visible').click()
      cy.get('.swiper-slide').contains('IT & Eng').should('be.visible').click()
      cy.get('.swiper-slide').contains('Law & Consulting').should('be.visible').click()
      cy.get('.swiper-slide').contains('Product').should('be.visible').click()
      cy.get('.swiper-slide').contains('Sales & Ops').should('be.visible').click()
      })
    cy.contains('a', 'Akademik (S1 & S2)').should('be.visible').click().then(() => {
      cy.get('.swiper.swiper-initialized.swiper-horizontal.swiper-backface-hidden').should('be.visible')
      cy.get('.swiper-slide.swiper-slide-active').should('be.visible').find('a[href="/mentoring?mTab=academics"]').contains('All').first().click()
      cy.get('.swiper-slide').contains('Beasiswa S1').should('be.visible').click()
      cy.get('.swiper-slide').contains('Beasiswa S2').should('be.visible').click()
      cy.get('.swiper-slide').contains('IISMA/ Exchange').should('be.visible').click()
      cy.get('.swiper-slide').contains('Internship').should('be.visible').click()
      cy.get('.swiper-slide').contains('Leadership Program').should('be.visible').click()
      cy.get('.swiper-slide').contains('Study Abroad').should('be.visible').click()
    })

  }) 

  it('Card List Mentor', () => {
    cy.get('.MentorCard_mentor_card__zMRXB').should('be.visible')
    cy.get('img.w-3\\/4').should('be.visible')
    cy.get('h4.line-clamp-1').should('be.visible')
    cy.get('div.font-semibold.text-3xs.text-tertiary-wild-strawberry-60').should('be.visible')
    cy.get('.text-tertiary-aquamarine-70').should('be.visible')
    cy.get('div.text-neutral-100').should('be.visible').first()
    cy.get('div.text-neutral-100').should('be.visible').eq(1)
    cy.get('p.line-clamp-1').should('be.visible')
  })

  it('Back to Top and Call Center', () => {
    cy.scrollTo('bottom')
    cy.get('button').should('be.visible').eq(1).click({force: true})
    cy.contains('Butuh Bantuan ?').click({force: true})
  })

})

describe('Footer', () => {
  beforeEach(() => {
    cy.config("defaultCommandTimeout", 30000)
    cy.viewport(1920, 1080)
    cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    cy.scrollTo('bottom')
    cy.get('.border-t.bg-neutral-5').should('be.visible');
  });

  it('Logo in footer', () => {
    cy.get('a.w-fit svg').click({ force: true })
    cy.wait(3000)
    cy.go('back')
    cy.screenshot()
    cy.wait(3000)
    cy.get('div.flex.flex-col.gap-2\\.5').should('be.visible')
    cy.get('div.flex.flex-row').should('be.visible')
  })

  it('Loker', () => {
    cy.contains('h3', 'Loker').should('be.visible')
    cy.get('a.text-zinc-900').contains('Loker berdasarkan Industri').should('be.visible').invoke('removeAttr', 'target').first().click().then(() => {
    cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/industri')
    cy.go('back')
    })
    cy.get('a.text-zinc-900').contains('Loker berdasarkan Lokasi').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/lokasi')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Penuh Waktu').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/tipe/loker-full-time')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Kontrak').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/tipe/loker-kontrak')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Paruh Waktu').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/tipe/loker-part-time')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Magang').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/tipe/loker-magang')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Freelance').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/tipe/loker-freelance')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Loker Populer').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/loker/populer')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
     })
})

  it('Untuk Perusahaan', () => {
    cy.contains('h3', 'Untuk Perusahaan').should('be.visible')
    cy.get('a.text-zinc-900').contains('ATS & Job Portal untuk Perusahaan').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/pasang-loker-gratis')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Kantorku: Fast, reliable & intuitive HRIS').should('have.attr', 'href', 'https://kantorku.id/')
    cy.get('a.text-zinc-900').contains('Jadwalkan Demo').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/pasang-loker-gratis#employer-contact-form')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Harga').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/pasang-loker-gratis/pricing')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })

  })

  it('Tentang Deals', () => {
    cy.contains('h3', 'Tentang Dealls').should('be.visible')
    cy.get('a.text-zinc-900').contains('Cerita Kami').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/about')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Blog').should('have.attr', 'href', 'https://dev.dealls.com/pengembangan-karir')
    cy.get('a.text-zinc-900').contains('Gabung dengan Tim Kami').should('have.attr', 'href', 'https://sh.dealls.com/dealls-career')
    cy.get('a.text-zinc-900').contains('Kebijakan Pribadi').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/privacy-policies')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Syarat & Kondisi Dealls Group').should('be.visible').invoke('removeAttr', 'target').click().then(() => {
      cy.url().should('eq', 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app/terms-and-condition')
      cy.wait(3000)
      cy.go('back')
      cy.wait(3000)
    })
    cy.get('a.text-zinc-900').contains('Syarat & Kondisi KantorKu').should('have.attr', 'href', 'https://kantorku.id/terms-and-condition')

  })

  it('Hubungi Kami', () => {
    cy.contains('h3', 'Hubungi Kami').should('be.visible')
    cy.get('.flex.flex-col.items-start.justify-start').should('be.visible')
    cy.get('a[href*="instagram.com/dealls.jobs"]').should('be.visible')
    cy.get('a[href*="twitter.com/DeallsJobs"]').should('be.visible')
    cy.get('a[href*="linkedin.com/company/dealls"]').should('be.visible')

  })
})
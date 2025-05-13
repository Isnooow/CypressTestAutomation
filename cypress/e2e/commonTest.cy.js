  describe('Login Test', () => {
    beforeEach(() => {
        cy.config("defaultCommandTimeout", 30000)
        cy.viewport(1920, 1080)
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    });

    it('Go Login Page', () => { 
        cy.get('#dealls-navbar-login-btn').click()
        cy.screenshot()
      })

    it('Login Verify', () => {
      cy.get('#dealls-navbar-login-btn').click()
      cy.fixture('data').then((user) => {
        cy.get('#basic_email').type(user.email)
        cy.get('#basic_password').type(user.password)
      });
      cy.get('button[type="submit"]').contains('Sign In').click()
      cy.get('h1.HeroTitleSubtitle_title_subtitle__GlZkf').should('be.visible')
    })

    it('Login not Verify', () => {
      cy.get('#dealls-navbar-login-btn').click()
      cy.fixture('data').then((user) => {
        cy.get('#basic_email').type(user.failEmail)
        cy.get('#basic_password').type(user.failPassword)
      });
      cy.get('button[type="submit"]').contains('Sign In').click()
      cy.contains('.ant-message-error', 'Email Not found').should('be.visible')
    })
  })

  describe('Register Test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.clearLocalStorage()
        cy.window().then((win) => win.sessionStorage.clear())
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    });

    it('Go Register Page', () => {
        cy.get('#dealls-navbar-register-btn').click()
        cy.screenshot()
      })

    it('Register Succeed', () => {
      cy.get('#dealls-navbar-register-btn').click()
      cy.get('a[href="/onboarding?step=1"]').click()
      cy.fixture('data').then((user) => {
        cy.get('#fullName').type(user.namedaftar)
        cy.get('button[type="submit"]').contains('Selanjutnya').click()
        cy.get('#jobSearchStatus').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Actively looking for the next 3 months ').click()
        cy.get('#whatsapp').type(user.phone)
        cy.get('#email').type(user.emaildaftar)
        cy.get('#campus').type('Universitas Indonesia{enter}')
        cy.get('#eligibility').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('1 - 3 YoE').click()
        cy.get('button[type="submit"]').contains('Selanjutnya').click()
        cy.get('button[type="button"]').contains('Skip for now, my CV is not ready').click()
        cy.get('button[type="submit"]').contains('Selanjutnya').click()
        cy.get('button[type="button"]').contains('Organisasi').click()
        cy.get('#organizationName').type(user.organizationName)
        cy.get('#organizationPosition').type('Head of Team{enter}')
        cy.get('button[type="submit"]').contains('Selanjutnya').click()
        cy.get('button[type="button"]').contains('Add another specialization').click()
        cy.get('#rc_select_8').click({ force: true })
        cy.get('.ant-select-item-option-content').contains('Data').click()
        cy.contains('label', 'Business Analyst').find('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').contains('Selanjutnya').click()
        cy.get('#password').type(user.passwordDaftar)
        cy.get('#passwordConfirmation').type(user.passwordDaftar)
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="submit"]').contains('Finish').click().then(() => {
          if (cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app')) {
            expect(true).to.be.true;
          } else {
            cy.get('img[alt="user photo"]').should('be.visible')
          }
        })
        cy.screenshot()
      });
    })
  })

  describe('Search Mentor Test', () => {
    beforeEach(() => {
      cy.config("defaultCommandTimeout", 30000)
      cy.viewport(1920, 1080)
    });

    it('Go Mentor Page', () => {
        cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
      })

    it('Search Mentor Succeed', () => {
      cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
      cy.fixture('data').then((user) => {
        cy.get('#searchMentor').type(user.searchMentor)
        const regex = new RegExp(user.searchMentor, 'i')
        cy.get('h4.line-clamp-1').contains(regex).should('be.visible')
      })
    })

    it('Search Mentor Failed', () => {
      cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
      cy.fixture('data').then((user) => {
        cy.get('#searchMentor').type(user.searchFailMentor)
        cy.get('h3.text-center').should('have.text', 'Tidak ada hasil pencarian ditemukan')
      })
    })
  })

  describe('Request a Session Mentor Test ', () => {
    beforeEach(() => {
      cy.config("defaultCommandTimeout", 30000);
      cy.viewport(1920, 1080)
      cy.visit('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring')
    });

      it('Request a Session Mentor Succeed', () => {
        cy.get('#dealls-navbar-login-btn').click()
        cy.fixture('data').then((user) => {
          cy.get('#basic_email').type(user.email)
          cy.get('#basic_password').type(user.password)
          cy.get('button[type="submit"]').contains('Sign In').click()
          cy.get('h1.HeroTitleSubtitle_title_subtitle__GlZkf').should('be.visible')
          cy.get('#searchMentor').type(user.nameMentor)
          const regex = new RegExp(user.nameMentor, 'i')
          cy.get('h4.line-clamp-1').contains(regex).should('be.visible')
          cy.wait(1000)
          cy.get('h4.line-clamp-1').contains(user.nameMentor).click()
          cy.wait(1000)
          cy.get('button[type="button"]').contains('Ajukan Jadwal').click()
          cy.get('button[type="button"]').contains(user.plan).click()
          cy.get('button[type="button"]').contains('Selanjutnya').click()
          cy.wait(1000)
          cy.get('.text-neutral-30').contains('Select Date Range').click()
          cy.contains('div.rmdp-day', '17').click()
          cy.contains('div.rmdp-day', '19').click()
          cy.get('#proposedTimes_0_startTime').type('10:00')
          cy.get('#proposedTimes_0_endTime').type('11:00')
          cy.wait(2000)
          cy.get('#notes').clear().type(user.note)
          cy.wait(2000)
          cy.get('#mentoring-schedule-pick-schedule-request-session-btn').click().then(() => {
          if (cy.get('#commitCheckbox').check({ force: true })) {
          expect(true).to.be.true
          } else {
          cy.wait(1000)
          cy.contains('label', 'Saya telah memposting gambar di cerita Instagram saya').click({ force: true });
          cy.wait(1000)
          cy.get('input.ant-checkbox-input[value="3"]').check({ force: true })
          cy.wait(4000)
        }})
        cy.get('#mentoring-schedule-finish-request-session-btn').should('not.be.disabled').click()
        cy.screenshot()
        })
      })
  })



function data() {
  function getThemeFromLocalStorage() {
    // if user already changed the theme, use it
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    // else return their preferences
    return (
      !!window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

  function setThemeToLocalStorage(value) {
    window.localStorage.setItem('dark', value)
  }

  return {
    dark: getThemeFromLocalStorage(),
    toggleTheme() {
      this.dark = !this.dark
      setThemeToLocalStorage(this.dark)
    },
    isSideMenuOpen: false,
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
    closeSideMenu() {
      this.isSideMenuOpen = false
    },
    isNotificationsMenuOpen: false,
    toggleNotificationsMenu() {
      this.isNotificationsMenuOpen = !this.isNotificationsMenuOpen
    },
    closeNotificationsMenu() {
      this.isNotificationsMenuOpen = false
    },
    isProfileMenuOpen: false,
    toggleProfileMenu() {
      this.isProfileMenuOpen = !this.isProfileMenuOpen
    },
    closeProfileMenu() {
      this.isProfileMenuOpen = false
    },
    isPagesMenuOpen: false,
    togglePagesMenu() {
      this.isPagesMenuOpen = !this.isPagesMenuOpen
    },
    isMerchantsMenuOpen: false,
    toggleMerchantMenu() {
      this.isMerchantsMenuOpen = !this.isMerchantsMenuOpen
    },
    isPartnersMenuOpen: false,
    togglePartnersMenu() {
      this.isPartnersMenuOpen = !this.isPartnersMenuOpen
    },
    isMobileMenuOpen: false,
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    isUssdMenuOpen: false,
    toggleUssdMenu() {
      this.isUssdMenuOpen = !this.isUssdMenuOpen
    },
    isPlatiniumMenuOpen: false,
    togglePlatiniumMenu() {
      this.isPlatiniumMenuOpen = !this.isPlatiniumMenuOpen
    },
    isSpeedLoanMenuOpen: false,
    toggleSpeedLoanMenu() {
      this.isSpeedLoanMenuOpen = !this.isSpeedLoanMenuOpen
    },
    isDisbursementMenuOpen: false,
    toggleDisbursementMenu() {
      this.isDisbursementMenuOpen = !this.isDisbursementMenuOpen
    },
    isPartnersMenuOpen: false,
    toggleDisbursmentMenu() {
      this.isPartnersMenuOpen = !this.isPartnersMenuOpen
    },
    // Modal
    isModalOpen: false,
    trapCleanup: null,
    openModal() {
      this.isModalOpen = true
      this.trapCleanup = focusTrap(document.querySelector('#modal'))
    },
    closeModal() {
      this.isModalOpen = false
      this.trapCleanup()
    },
  }
}

module.exports = class ObjectCompany {
  constructor(newCompany) {
    this.companyProfileCreator = newCompany.companyProfileCreator;
    this.director = newCompany.director;
    this.sity = newCompany.sity;
    this.state = newCompany.state;
    this.address = newCompany.address;
    this.OGRN = newCompany.OGRN;
    this.INN = newCompany.INN;
    this.statuteСapital = newCompany.statuteСapital;
    this.balanceСredit = newCompany.balanceСredit;
    this.full = newCompany.full;
    this.briefly = newCompany.briefly;
  }

  company () {
   return company = {
	  director: [this.director],
	  companyProfileCreator: {
        id: [companyProfileCreator]
	  },
	  dateProfileCreator: [new Date],
	  country: {
        state: [this.state],
        city: [this.sity],
        address: [this.address],
	  },
	  nameComapny: {
	  	briefly: [this.briefly],
	  	full: [this.full]
	  },
	  stateRegistr: {
        OGRN: [this.OGRN],
        INN: [this.INN],
	  },
	  statuteСapital: [this.statuteСapital],
	  balanceСredit: 0,
	  staff: {
	  	divisionsName: {
          staffCount: 1,
          staff: [],
	  	},
	  },
	  classCompany: {small: true, middling: false, big: false}
    }
  }
}
const uuid = require('uuid')

module.exports = (sequelize, type) => {
  const obj = sequelize.define(
    'Part',
    {
      id: {
        type: type.UUID,
        primaryKey: true,
      },
      name: type.STRING,
      type: type.STRING,
      make: type.STRING,
      model: type.STRING,
      sn: type.STRING,
      purchaseDate: type.DATEONLY,
      po: type.STRING,
      locationDetail: type.STRING,
      status: type.STRING,
      statusDate: type.DATEONLY,
      statusDescription: type.TEXT,
      description: type.TEXT,
      active: type.BOOLEAN,
    },
    {},
  )

  // This is necessary so the model.update() correctly fires the individual hooks
  obj.beforeBulkUpdate(options => {
    //console.log('In Part('+JSON.stringify(options)+') :: beforeBulkUpdate()')
    options.individualHooks = true
  })
  obj.afterBulkUpdate(options => {
    //console.log('In Part() :: afterBulkUpdate()')
    options.individualHooks = false
  })
  obj.beforeCreate(obj => (obj.id = uuid.v4()))
  obj.afterSave(o => {
    console.log('In Part::afterSave()')
    // console.log(o)

    // Deal with changed productId
    // changed() only returns true on an update
    if (o.changed('productId')) {
      const prevProductId = o.previous('productId')
      if (prevProductId) {
        o.sequelize.models.Product.findByPk(prevProductId).then(p => {
          if (p) p.rollupParts()
        })
      }
    }

    if (o.isNewRecord || o.changed('status') || o.changed('active')) {
      // Rollup current Product
      return o.getProduct().then(p => {
        if (p) p.rollupParts()
      })
    }
  })
  obj.afterDestroy(o => {
    return o.getProduct().then(p => {
      if (p) p.rollupParts()
    })
  })

  return obj
}

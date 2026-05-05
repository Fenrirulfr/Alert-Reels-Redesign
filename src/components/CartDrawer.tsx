import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-bg border-l border-white/10 z-[101] shadow-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-heading"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-yellow" />
                <h2 id="cart-heading" className="text-brand-text font-black uppercase tracking-widest text-sm">Shopping Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full text-brand-text-muted hover:text-brand-text transition-all active:scale-90"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-hide">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-brand-text-muted/20" />
                  </div>
                  <div>
                    <h3 className="text-brand-text font-bold">Your cart is empty</h3>
                    <p className="text-brand-text-muted text-sm mt-1">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-brand-yellow font-black uppercase tracking-widest text-[10px] hover:underline cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-lg bg-white/5 border border-white/10 overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-brand-text font-bold text-sm tracking-tight truncate">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-text-muted/40 hover:text-red-500 transition-colors p-1"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-brand-blue font-bold text-xs">{item.price}</p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 bg-white/5 rounded-md px-2 py-1.5 border border-white/10">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-brand-text-muted hover:text-brand-yellow transition-colors p-1"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-brand-text font-bold text-xs min-w-[20px] text-center" aria-label="Quantity">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-brand-text-muted hover:text-brand-yellow transition-colors p-1"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-white/[0.02] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-brand-text-muted text-xs font-bold uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-brand-text">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-brand-text-muted text-xs font-bold uppercase tracking-widest">
                    <span>Shipping</span>
                    <span className="text-green-500">Free</span>
                  </div>
                </div>
                <div className="pt-2 flex justify-between items-center border-t border-white/5 mt-2">
                  <span className="text-brand-text font-black uppercase tracking-widest text-sm">Total</span>
                  <span className="text-brand-yellow font-black text-xl">${cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                
                <div className="grid grid-cols-1 gap-2 pt-2">
                  <Link 
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-brand-yellow text-black font-black uppercase tracking-widest text-xs py-4 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-yellow/10"
                    aria-label="Proceed to secure checkout"
                  >
                    Complete Checkout <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-brand-text-muted font-bold uppercase tracking-widest text-[10px] py-2 hover:text-brand-text transition-colors cursor-pointer"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
}

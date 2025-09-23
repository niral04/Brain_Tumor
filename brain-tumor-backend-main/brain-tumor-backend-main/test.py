import tensorflow as tf

MODEL_PATH = "best_model.h5"
model = tf.keras.models.load_model(MODEL_PATH)

print("Model type:", type(model))
print("\nSummary:")
try:
    model.summary()
except Exception as e:
    print("Could not call model.summary():", e)

print("\nLayers:")
for i, layer in enumerate(model.layers):
    print(f"{i}: {layer.name} ({layer.__class__.__name__}) - input {layer.input_shape if hasattr(layer,'input_shape') else 'NA'} output {layer.output_shape if hasattr(layer,'output_shape') else 'NA'}")
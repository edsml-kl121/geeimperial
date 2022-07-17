import tensorflow as tf
from . import metrics_
class configuration:
  def __init__(self, PROJECT_TITLE, BANDS1, TRAIN_SIZE, EVAL_SIZE, BANDS2=[], BANDS3=[], country="TH", image=None, sam_arr=None, type_=1):
    if type_ == 1:
      self.type_ = "fs"
    elif type_ == 2:
      self.type_ = "m2"
    elif type_ == 3:
      self.type_ = "m3"
    else:
      self.type_ = None
    self.country = country
    self.PROJECT_TITLE = PROJECT_TITLE
    self.BANDS1 = BANDS1
    self.BANDS2 = BANDS2
    self.BANDS3 = BANDS3
    self.BUCKET = "geebucketwater"
    self.FOLDER = f'{self.type_}_{self.country}_Cnn_{self.PROJECT_TITLE}'
    self.TRAIN_SIZE = TRAIN_SIZE
    self.EVAL_SIZE = EVAL_SIZE
    self.BUCKET = "geebucketwater"
    self.TRAINING_BASE = f'training_patches_{PROJECT_TITLE}'
    self.EVAL_BASE = f'eval_patches_{PROJECT_TITLE}'
    self.TEST_BASE_1 = f'test_patches_{PROJECT_TITLE}_1'
    self.TEST_BASE_2 = f'test_patches_{PROJECT_TITLE}_2'
    self.RESPONSE = 'water'
    self.BANDS = BANDS1 + BANDS2 + BANDS3 
    self.FEATURES = BANDS1 + BANDS2 + BANDS3 + [self.RESPONSE]
    # Specify the size and shape of patches expected by the model.
    self.KERNEL_SIZE = 256
    self.KERNEL_SHAPE = [self.KERNEL_SIZE, self.KERNEL_SIZE]
    self.COLUMNS = [
      tf.io.FixedLenFeature(shape=self.KERNEL_SHAPE, dtype=tf.float32) for k in self.FEATURES
    ]
    self.FEATURES_DICT = dict(zip(self.FEATURES, self.COLUMNS))
    # Specify model training parameters.
    self.BATCH_SIZE = 16
    self.EPOCHS = 5
    self.BUFFER_SIZE = 2000
    self.OPTIMIZER = 'adam'
    self.LOSS = 'categorical_crossentropy'
    self.METRICS = ['AUC', metrics_.f1, metrics_.custom_accuracy]
    self.image = image
    self.sam_arr = sam_arr
    



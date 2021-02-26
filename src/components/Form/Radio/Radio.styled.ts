import styled from 'styled-components'

export const Item = styled.p`
  [type='radio']:checked,
  [type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  [type='radio']:checked + label,
  [type='radio']:not(:checked) + label {
    position: relative;
    //padding-left: 28px;
    cursor: pointer;
    //line-height: 20px;
    display: inline-block;
    color: #666;
    svg {
      opacity: 0;
      z-index: 2;
      position: absolute;
      //top: 4px;
      top: -9px;
      left: 3px;
      color: white;
    }
  }

  [type='radio']:checked + label:before,
  [type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: -13px;

    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }

  [type='radio']:checked + label:after,
  [type='radio']:not(:checked) + label:after {
    content: '';
    width: 18px;
    height: 18px;
    background: ${(props) => props.theme.colors.accent};
    position: absolute;
    //top: 1px;

    top: -12px;
    left: 1px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  [type='radio']:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  [type='radio']:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  [type='radio']:checked + label {
    svg {
      opacity: 1;
    }
  }
`

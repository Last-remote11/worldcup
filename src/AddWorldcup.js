import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddWorldcup = ({world, routeChange}) => {

    const classes = useStyles();

    const [addNumberOfCandidates, setAddNumberOfCandidates] = useState(4)
    const [addWorldcupName, setAddWorldcupName] = useState('')
    const [addThumbnail, setAddThumbnail] = useState('')
    const [addName, setAddName] = useState('')
    const [addImg, setAddImg] = useState('')

    useEffect(() => {
        setAddName(new Array(addNumberOfCandidates))
        setAddImg(new Array(addNumberOfCandidates))
    }, [addNumberOfCandidates])

    const generateMultipleFields = (addNumberOfCandidates) => {

        let basicTextArray = []
        for(var i=0; i < addNumberOfCandidates; i++) {
            basicTextArray.push(
                <form key = {Number(i)} className={classes.root} noValidate autoComplete="off">
                <TextField id={i.toString()} label={i+1}  variant="filled" onChange={onChangeNameField}/>
                <TextField id={i.toString()} label="이미지 링크" variant="filled" onChange={onChangeImgField}/>
                </form>
            )
        };
        return basicTextArray;
    }

    const onChangeWorldcupNameField = (event) => {
        setAddWorldcupName(event.target.value);
    }

    const onChangeThumbnailField = (event) => {
        setAddThumbnail(event.target.value);
    }

    const onChangeN = (event) => {
        setAddNumberOfCandidates(Number(event.target.value))
    } 


    const onChangeNameField = (event) => {

        let newArr = [...addName];
        newArr[Number(event.target.id)] = event.target.value; 
        setAddName(newArr);
    }


    const onChangeImgField = (event) => {

        let newArr = [...addImg];
        newArr[Number(event.target.id)] = event.target.value; 
        setAddImg(newArr);
    }



    const onSubmit = () => {

        let sendingCandidates = []
        console.log(addWorldcupName, addName, addImg)

        // 모든 항목이 채워졌는지 체크.  빈칸은 undified 혹은 '' (둘다false)가 되기때문
        for (var i=0; i < addNumberOfCandidates; i++) {
            if (addImg[i] && addName[i]) {
                sendingCandidates.push({
                    worldcupname: addWorldcupName,
                    name: addName[i],
                    img: addImg[i]
                })
            } else {
                alert('모든 항목을 입력해주세요')
                return
            }
        }

        // 월드컵이름 중복체크
        for (let i=0; i<world.length; i++) {
            if (world[i].worldcupname === addWorldcupName) {
                alert('중복된 월드컵 이름입니다. 다른 이름을 사용해주세요.')
                return
            }
        }
        

        fetch('https://young-mesa-11204.herokuapp.com/addWorldcupName', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            addWorldcupName: addWorldcupName,
            addThumbnail: addThumbnail,
            addNumberOfCandidates: addNumberOfCandidates
          })
        })
        .then(res => {if (res) {
            fetch('https://young-mesa-11204.herokuapp.com/addCandidates', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    sendingCandidates
                )
            })
        }
        })
        .then(data => {
            console.log(data)
            alert('추가가 완료되었습니다.')
            routeChange('home')
        
        })
        // addWorldcupName을 db의 worldcups 테이블에 삽입,
        // addName을 db의 candidates 테이블에 삽입
        // 만약 월드컵이름이 중복이면 에러, candidate도 안되게함
        // 갯수가 가변적인 textfield에 있는 값들을 어떻게 catch하지?
    }

    const selectNOC = () => {
        return (
            <select name="addNumberOfCandidates" id="cars" onChange={onChangeN}>
            <option value="4">4강</option>
            <option value="8">8강</option>
            <option value="16">16강</option>
            <option value="32">32강</option>
            <option value="64">64강</option>
            <option value="128">128강</option>
            </select>
        )
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div id = 'textFieldList'>
                <TextField id="standard-basic" label="월드컵 이름"  variant="outlined" onChange={onChangeWorldcupNameField}/><br/>
                <TextField id="standard-basic" label="월드컵 썸네일" onChange={onChangeThumbnailField}/><br/>
                {selectNOC()}
                {generateMultipleFields(addNumberOfCandidates)}
                <Button variant="contained" color="primary" onClick={onSubmit}>
                등록!
                </Button>
                <h5>※아직은 2의 완전제곱수만 등록이 가능합니다.</h5>
            </div>
        </form>
    )
}


export default AddWorldcup;
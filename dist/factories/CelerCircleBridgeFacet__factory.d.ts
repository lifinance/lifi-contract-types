import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
declare type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161277738038061277783398101604081905261002e9161005c565b6001600160a01b039182166080521660a052610094565b6001600160a01b0381168114610059575f5ffd5b50565b5f5f6040838503121561006d575f5ffd5b825161007881610045565b602084015190925061008981610045565b809150509250929050565b60805160a05161269f6100d85f395f818161023f015281816105020152818161058f015281816107df015261089601525f818161080001526108be015261269f5ff3fe608060405260043610610028575f3560e01c80638fab06631461002c578063bab657d814610041575b5f5ffd5b61003f61003a3660046121cb565b610060565b005b34801561004c575f5ffd5b5061003f61005b366004612266565b610318565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb34476122a5565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102c7576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102db8b5f01518c60c001518c8c336105d5565b60c08c01526102e98b610718565b504793505050508181111561030c5761030c5f8461030785856122a5565b610963565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610393576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103a0826122dd565b806101000151156103dd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e6836122dd565b80610120015115610423576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042c846122dd565b60a081015173ffffffffffffffffffffffffffffffffffffffff1661047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610500856122dd565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461058a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105b87f00000000000000000000000000000000000000000000000000000000000000008860c00135610999565b6105c96105c4886122dd565b610718565b50505f90935550505050565b5f82808203610610576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561061e6001856122a5565b81811061062d5761062d6122e8565b905060200281019061063f9190612315565b610650906080810190606001612351565b90505f61065c82610b0b565b905073ffffffffffffffffffffffffffffffffffffffff82166106865761068334826122a5565b90505b5f6106918888610bc1565b905061069d8888610ccb565b6106aa8a89898985610d37565b5f826106b585610b0b565b6106bf91906122a5565b90508981101561070a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60e081015167ffffffffffffffff10156107da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f5f627269646765446174612e64657374696e6174696f6e436861696e4964207060448201527f617373656420697320746f6f2062696720746f2066697420696e2075696e743660648201527f3400000000000000000000000000000000000000000000000000000000000000608482015260a401610701565b6108297f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008360c001516110e2565b60c081015160e082015160a08301516040517f2fbb00ac000000000000000000000000000000000000000000000000000000008152600481019390935267ffffffffffffffff909116602483015273ffffffffffffffffffffffffffffffffffffffff90811660448301527f0000000000000000000000000000000000000000000000000000000000000000811660648301527f00000000000000000000000000000000000000000000000000000000000000001690632fbb00ac906084016020604051808303815f875af1158015610904573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610928919061236a565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161095891906123dd565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561098f5761098a838383611217565b505050565b61098a8282611396565b805f036109d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a2b5780341015610a27576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a95573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ab991906124f0565b905081811015610aff576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610701565b61098a833330856114bc565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bb9576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b90573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bb491906124f0565b610bbb565b475b92915050565b6060815f8167ffffffffffffffff811115610bde57610bde611fa0565b604051908082528060200260200182016040528015610c07578160200160208202803683370190505b5090505f805b83811015610cc057868682818110610c2757610c276122e8565b9050602002810190610c399190612315565b610c4a906080810190606001612351565b9150610c5582610b0b565b838281518110610c6757610c676122e8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cb85734838281518110610ca057610ca06122e8565b60200260200101818151610cb491906122a5565b9052505b600101610c0d565b509095945050505050565b5f5b8181101561098a5736838383818110610ce857610ce86122e8565b9050602002810190610cfa9190612315565b9050610d0c60e0820160c08301612507565b15610d2e57610d2e610d246060830160408401612351565b8260800135610999565b50600101610ccd565b838383838260018114610ffe575f8585610d526001856122a5565b818110610d6157610d616122e8565b9050602002810190610d739190612315565b610d84906080810190606001612351565b90505f89815b81811015610f2b57368d8d83818110610da557610da56122e8565b9050602002810190610db79190612315565b9050610de6610dcc6060830160408401612351565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e485750610e48610dff6040830160208401612351565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e5f5750610e5f610dff6020830183612351565b8015610ee25750610ee2610e7660a0830183612522565b610e84916004915f9161258a565b610e8d916125b1565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f18576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f228f826116d1565b50600101610d8a565b505f90505b610f3b6001856122a5565b811015610ff6575f888883818110610f5557610f556122e8565b9050602002810190610f679190612315565b610f78906080810190606001612351565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fed57858281518110610fbf57610fbf6122e8565b6020026020010151610fd082610b0b565b610fda91906122a5565b92508215610fed57610fed818885610963565b50600101610f30565b5050506110d6565b875f5b818110156110d357368b8b8381811061101c5761101c6122e8565b905060200281019061102e9190612315565b9050611043610dcc6060830160408401612351565b8061105c575061105c610dff6040830160208401612351565b80156110735750611073610dff6020830183612351565b801561108a575061108a610e7660a0830183612522565b6110c0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110ca8d826116d1565b50600101611001565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661110257505050565b73ffffffffffffffffffffffffffffffffffffffff821661114f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156111c2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111e691906124f0565b101561098a5761098a83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119a4565b73ffffffffffffffffffffffffffffffffffffffff8316611264576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112b1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561131b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061133f91906124f0565b905080821115611385576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610701565b611390848484611b11565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113e3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611426576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610701565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f811461147c576040519150601f19603f3d011682016040523d82523d5f602084013e611481565b606091505b505090508061098a576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611509576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611556576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285915f918316906370a0823190602401602060405180830381865afa1580156115c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115e891906124f0565b90506115f682868686611b67565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611664573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061168891906124f0565b61169291906122a5565b146116c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116e76116e16020830183612351565b3b151590565b61171d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361175c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611770610dcc6060850160408601612351565b61177a575f611780565b82608001355b90505f61179b6117966060860160408701612351565b610b0b565b90505f6117b16117966080870160608801612351565b9050825f036117e7576117e76117cd6060870160408801612351565b6117dd6040880160208901612351565b87608001356110e2565b8460800135821015611832576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610701565b5f806118416020880188612351565b73ffffffffffffffffffffffffffffffffffffffff168561186560a08a018a612522565b604051611873929190612617565b5f6040518083038185875af1925050503d805f81146118ad576040519150601f19603f3d011682016040523d82523d5f602084013e6118b2565b606091505b5091509150816118c5576118c581611bc5565b5f6118d961179660808a0160608b01612351565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961190a60208b018b612351565b61191a60608c0160408d01612351565b61192a60808d0160608e01612351565b8c6080013589871161193c5786611946565b6119468a886122a5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a308482611bcf565b6113905760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611b079085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c8a565b6113908482611c8a565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261098a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a85565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113909085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a85565b8051602082018181fd5b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff1684604051611bf79190612626565b5f604051808303815f865af19150503d805f8114611c30576040519150601f19603f3d011682016040523d82523d5f602084013e611c35565b606091505b5091509150818015611c5f575080511580611c5f575080806020019051810190611c5f919061263c565b8015611c81575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f611ceb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d979092919063ffffffff16565b905080515f1480611d0b575080806020019051810190611d0b919061263c565b61098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610701565b6060611da584845f85611dad565b949350505050565b606082471015611e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610701565b5f5f8673ffffffffffffffffffffffffffffffffffffffff168587604051611e679190612626565b5f6040518083038185875af1925050503d805f8114611ea1576040519150601f19603f3d011682016040523d82523d5f602084013e611ea6565b606091505b5091509150611eb787838387611ec2565b979650505050505050565b60608315611f575782515f03611f505773ffffffffffffffffffffffffffffffffffffffff85163b611f50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610701565b5081611da5565b611da58383815115611f6c5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107019190612657565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ff157611ff1611fa0565b60405290565b5f82601f830112612006575f5ffd5b813567ffffffffffffffff81111561202057612020611fa0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561206d5761206d611fa0565b604052818152838201602001851015612084575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120c3575f5ffd5b919050565b80151581146120d5575f5ffd5b50565b80356120c3816120c8565b5f61014082840312156120f4575f5ffd5b6120fc611fcd565b823581529050602082013567ffffffffffffffff81111561211b575f5ffd5b61212784828501611ff7565b602083015250604082013567ffffffffffffffff811115612146575f5ffd5b61215284828501611ff7565b604083015250612164606083016120a0565b6060820152612175608083016120a0565b608082015261218660a083016120a0565b60a082015260c0828101359082015260e080830135908201526121ac61010083016120d8565b6101008201526121bf61012083016120d8565b61012082015292915050565b5f5f5f604084860312156121dd575f5ffd5b833567ffffffffffffffff8111156121f3575f5ffd5b6121ff868287016120e3565b935050602084013567ffffffffffffffff81111561221b575f5ffd5b8401601f8101861361222b575f5ffd5b803567ffffffffffffffff811115612241575f5ffd5b8660208260051b8401011115612255575f5ffd5b939660209190910195509293505050565b5f60208284031215612276575f5ffd5b813567ffffffffffffffff81111561228c575f5ffd5b8201610140818503121561229e575f5ffd5b9392505050565b81810381811115610bbb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610bbb36836120e3565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612347575f5ffd5b9190910192915050565b5f60208284031215612361575f5ffd5b61229e826120a0565b5f6020828403121561237a575f5ffd5b815167ffffffffffffffff8116811461229e575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612404610160840182612391565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261243f8282612391565b9150506060840151612469608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124d861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612500575f5ffd5b5051919050565b5f60208284031215612517575f5ffd5b813561229e816120c8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612555575f5ffd5b83018035915067ffffffffffffffff82111561256f575f5ffd5b602001915036819003821315612583575f5ffd5b9250929050565b5f5f85851115612598575f5ffd5b838611156125a4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612610577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f6020828403121561264c575f5ffd5b815161229e816120c8565b602081525f61229e602083018461239156fea264697066735822122098726ccbcfcc74513ad5bc8c354e8d0d0d8dc26387ce9c5c26c68da983fc862364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};

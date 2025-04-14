import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPacked, AcrossFacetPackedInterface } from "../AcrossFacetPacked";
declare type AcrossFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPacked__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPacked>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPacked;
    connect(signer: Signer): AcrossFacetPacked__factory;
    static readonly bytecode = "0x60c060405234801562000010575f80fd5b5060405162002c3438038062002c34833981016040819052620000339162000076565b5f80546001600160a01b0319166001600160a01b039283161790559182166080521660a052620000c7565b6001600160a01b038116811462000073575f80fd5b50565b5f805f6060848603121562000089575f80fd5b835162000096816200005e565b6020850151909350620000a9816200005e565b6040850151909250620000bc816200005e565b809150509250925092565b60805160a051612b286200010c5f395f8181610c210152610e0301525f818161073801528181610a0e01528181610b6801528181610bdf0152610dd20152612b285ff3fe6080604052600436106100ef575f3560e01c80637200b82911610087578063b4f3937811610057578063b4f3937814610262578063cf73f711146102aa578063e30c3978146102c9578063f2fde38b146102f5575f80fd5b80637200b829146101b35780638da5cb5b146101c7578063acc53eb814610217578063ae6c706014610243575f80fd5b80634c128e60116100c25780634c128e60146101665780634c478642146101795780635a39b10a146101985780635eedcbd6146101a0575f80fd5b80631458d7ad146100f35780631cf9fd2f146101145780632340ab8f1461014a57806323452b9c14610152575b5f80fd5b3480156100fe575f80fd5b5061011261010d366004612063565b610314565b005b34801561011f575f80fd5b5061013361012e3660046120dc565b610447565b6040516101419291906121cb565b60405180910390f35b6101126106b7565b34801561015d575f80fd5b506101126108e6565b610112610174366004612339565b6109af565b348015610184575f80fd5b506101126101933660046123ea565b610ae2565b610112610bba565b6101126101ae366004612459565b610d95565b3480156101be575f80fd5b50610112610ecd565b3480156101d2575f80fd5b505f546101f29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610141565b348015610222575f80fd5b506102366102313660046124e3565b610fb1565b6040516101419190612537565b34801561024e575f80fd5b5061013361025d3660046120dc565b611146565b34801561026d575f80fd5b506102366040518060400160405280600881526020017fd00dfeeddeadbeef00000000000000000000000000000000000000000000000081525081565b3480156102b5575f80fd5b506102366102c4366004612550565b611332565b3480156102d4575f80fd5b506001546101f29073ffffffffffffffffffffffffffffffffffffffff1681565b348015610300575f80fd5b5061011261030f3660046125e3565b61143e565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610364576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff16868660405161038c9291906125fc565b5f604051808303815f865af19150503d805f81146103c5576040519150601f19603f3d011682016040523d82523d5f602084013e6103ca565b606091505b50509050801561040c576103df84848461159a565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a161043e565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60408051610140810182525f80825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e085018490526101008501849052610120850184905285519081018652838152908101839052938401819052830152906090831015610549576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e2031343429000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5f610555601c8561260b565b9050610565600c60048688612643565b61056e9161266a565b7fffffffffffffffff0000000000000000000000000000000000000000000000001683526105a06020600c8688612643565b6105a9916126b2565b60601c60a08401526105bf603460208688612643565b6105c8916126b2565b60601c60808401526105de604460348688612643565b6105e7916126f8565b60801c60c08401526105fd604860448688612643565b6106069161273e565b60e090811c9084015261061d605060488688612643565b6106269161266a565b60c01d60070b825261063c605460508688612643565b6106459161273e565b60e01c602083015261065b607460548688612643565b61066491612784565b60608301526106768160748688612643565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506040830152505b9250929050565b5f6106c6603460203684612643565b6106cf916126b2565b60601c90505f6106e3604460343684612643565b6106ec916126f8565b60801c905061071373ffffffffffffffffffffffffffffffffffffffff83163330846115cb565b5f61071f601c3661260b565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3361076b6020600c365f612643565b610774916126b2565b60601c61078560346020365f612643565b61078e916126b2565b60601c856107a060486044365f612643565b6107a99161273e565b60e01c6107ba60506048365f612643565b6107c39161266a565b60c01c6107d460546050365f612643565b6107dd9161273e565b60e01c6107ed896074365f612643565b6107fb60746054365f612643565b61080491612784565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261084599989796959493929190600401612807565b5f604051808303815f87803b15801561085c575f80fd5b505af115801561086e573d5f803e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506108a49150600c90506004365f612643565b6108ad9161266a565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610936576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610985576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6109d173ffffffffffffffffffffffffffffffffffffffff8a1633308b6115cb565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec3390610a53908a908d908d908c908c908c908c908c908c90600401612807565b5f604051808303815f87803b158015610a6a575f80fd5b505af1158015610a7c573d5f803e3d5ffd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008d1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250602001905060405180910390a150505050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b32576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b81811015610bb557610bad838383818110610b5157610b51612883565b9050602002016020810190610b6691906125e3565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61168d565b600101610b34565b505050565b5f610bc6601c3661260b565b905073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016631186ec3334610c136020600c365f612643565b610c1c916126b2565b60601c7f000000000000000000000000000000000000000000000000000000000000000034610c4f60246020365f612643565b610c589161273e565b60e01c610c69602c6024365f612643565b610c729161266a565b60c01c610c836030602c365f612643565b610c8c9161273e565b60e01c610c9c8a6050365f612643565b610caa60506030365f612643565b610cb391612784565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08d901b168152610cf499989796959493929190600401612807565b5f604051808303818588803b158015610d0b575f80fd5b505af1158015610d1d573d5f803e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339350610d559250600c915060049050365f612643565b610d5e9161266a565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b6040517f1186ec3300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690631186ec33903490610e39908b907f00000000000000000000000000000000000000000000000000000000000000009084908d908d908d908d908d908d906004016128b0565b5f604051808303818588803b158015610e50575f80fd5b505af1158015610e62573d5f803e3d5ffd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008c1681527fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506020019150610ebb9050565b60405180910390a15050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610f1f576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff871115611047576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610540565b6fffffffffffffffffffffffffffffffff8811156110e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f6d696e416d6f756e742076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e74313238000000000000000000000000000000006064820152608401610540565b632340ab8f60e01b8b8b60601b8b60601b8b60801b8b60e01b8b60c01b8b60e01b895f1b8c8c6040516020016111279b9a9998979695949392919061290b565b60405160208183030381529060405290509a9950505050505050505050565b60408051610140810182525f80825260606020808401829052838501829052818401839052608080850184905260a0850184905260c0850184905260e08501849052610100850184905261012085018490528551908101865283815290810183905293840181905283015290606c831015611243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f696e76616c69642063616c6c6461746120286d7573742068617665206c656e6760448201527f7468203e203130382900000000000000000000000000000000000000000000006064820152608401610540565b5f61124f601c8561260b565b905061125f600c60048688612643565b6112689161266a565b7fffffffffffffffff00000000000000000000000000000000000000000000000016835261129a6020600c8688612643565b6112a3916126b2565b60601c60a08401526112b9602460208688612643565b6112c29161273e565b60e090811c908401526112d9602c60248688612643565b6112e29161266a565b60c01d60070b82526112f86030602c8688612643565b6113019161273e565b60e01c6020830152611317605060308688612643565b61132091612784565b60608301526106768160508688612643565b606063ffffffff67ffffffffffffffff881611156113d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610540565b604051611421907f5a39b10a00000000000000000000000000000000000000000000000000000000908b9060608c901b9060e08c811b9160c08d901b918c901b908b908b908b906020016129ef565b604051602081830303815290604052905098975050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461148e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166114db576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361152a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316156115c157610bb58383836117c2565b610bb58282611941565b5f6040517f23b872dd00000000000000000000000000000000000000000000000000000000815284600482015283602482015282604482015260205f6064835f8a5af13d15601f3d1160015f511416171691505080611686576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610540565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff83166116ad57505050565b73ffffffffffffffffffffffffffffffffffffffff82166116fa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561176d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117919190612aa1565b1015610bb557610bb583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a67565b73ffffffffffffffffffffffffffffffffffffffff831661180f576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661185c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156118c6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118ea9190612aa1565b905080821115611930576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610540565b61193b848484611bd4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661198e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156119d1576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610540565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611a27576040519150601f19603f3d011682016040523d82523d5f602084013e611a2c565b606091505b5050905080610bb5576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611af38482611c2a565b61193b5760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611bca9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ce7565b61193b8482611ce7565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bb59084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b48565b5f805f8473ffffffffffffffffffffffffffffffffffffffff1684604051611c529190612ab8565b5f604051808303815f865af19150503d805f8114611c8b576040519150601f19603f3d011682016040523d82523d5f602084013e611c90565b606091505b5091509150818015611cba575080511580611cba575080806020019051810190611cba9190612ad3565b8015611cdc575073ffffffffffffffffffffffffffffffffffffffff85163b15155b925050505b92915050565b5f611d48826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611df49092919063ffffffff16565b905080515f1480611d68575080806020019051810190611d689190612ad3565b610bb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610540565b6060611e0284845f85611e0a565b949350505050565b606082471015611e9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610540565b5f808673ffffffffffffffffffffffffffffffffffffffff168587604051611ec49190612ab8565b5f6040518083038185875af1925050503d805f8114611efe576040519150601f19603f3d011682016040523d82523d5f602084013e611f03565b606091505b5091509150611f1487838387611f1f565b979650505050505050565b60608315611fb45782515f03611fad5773ffffffffffffffffffffffffffffffffffffffff85163b611fad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610540565b5081611e02565b611e028383815115611fc95781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105409190612537565b803573ffffffffffffffffffffffffffffffffffffffff81168114612020575f80fd5b919050565b5f8083601f840112612035575f80fd5b50813567ffffffffffffffff81111561204c575f80fd5b6020830191508360208285010111156106b0575f80fd5b5f805f805f8060a08789031215612078575f80fd5b61208187611ffd565b9550602087013567ffffffffffffffff81111561209c575f80fd5b6120a889828a01612025565b90965094506120bb905060408801611ffd565b92506120c960608801611ffd565b9150608087013590509295509295509295565b5f80602083850312156120ed575f80fd5b823567ffffffffffffffff811115612103575f80fd5b61210f85828601612025565b90969095509350505050565b5f5b8381101561213557818101518382015260200161211d565b50505f910152565b5f815180845261215481602086016020860161211b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b805160070b825263ffffffff60208201511660208301525f6040820151608060408501526121b7608085018261213d565b606093840151949093019390935250919050565b60408152825160408201525f60208401516101408060608501526121f361018085018361213d565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc085840301608086015261222e838261213d565b925050606086015161225860a086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060a086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060c0860151610100818187015260e0880151915061012082818801528189015192506122cc8488018415159052565b88015180151561016088015292506122e2915050565b5082810360208401526122f58185612186565b95945050505050565b803567ffffffffffffffff81168114612020575f80fd5b8035600781900b8114612020575f80fd5b803563ffffffff81168114612020575f80fd5b5f805f805f805f805f806101208b8d031215612353575f80fd5b8a35995061236360208c01611ffd565b985060408b0135975061237860608c01611ffd565b965061238660808c016122fe565b955061239460a08c01612315565b94506123a260c08c01612326565b935060e08b013567ffffffffffffffff8111156123bd575f80fd5b6123c98d828e01612025565b915080945050809250506101008b013590509295989b9194979a5092959850565b5f80602083850312156123fb575f80fd5b823567ffffffffffffffff80821115612412575f80fd5b818501915085601f830112612425575f80fd5b813581811115612433575f80fd5b8660208260051b8501011115612447575f80fd5b60209290920196919550909350505050565b5f805f805f805f8060e0898b031215612470575f80fd5b8835975061248060208a01611ffd565b96506040890135955061249560608a01612315565b94506124a360808a01612326565b935060a089013567ffffffffffffffff8111156124be575f80fd5b6124ca8b828c01612025565b999c989b50969995989497949560c00135949350505050565b5f805f805f805f805f806101208b8d0312156124fd575f80fd5b8a35995061250d60208c01611ffd565b985061251b60408c01611ffd565b975060608b0135965060808b0135955061239460a08c01612315565b602081525f612549602083018461213d565b9392505050565b5f805f805f805f8060e0898b031215612567575f80fd5b8835975061257760208a01611ffd565b965061258560408a016122fe565b955061259360608a01612315565b94506125a160808a01612326565b935060a0890135925060c089013567ffffffffffffffff8111156125c3575f80fd5b6125cf8b828c01612025565b999c989b5096995094979396929594505050565b5f602082840312156125f3575f80fd5b61254982611ffd565b818382375f9101908152919050565b81810381811115611ce1577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8085851115612651575f80fd5b8386111561265d575f80fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156126aa5780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156126aa5760149490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156126aa5760109490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126aa5760049490940360031b84901b1690921692915050565b80356020831015611ce1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f61010073ffffffffffffffffffffffffffffffffffffffff808d168452808c1660208501525089604084015267ffffffffffffffff891660608401528760070b608084015263ffffffff871660a08401528060c084015261286c81840186886127c0565b9150508260e08301529a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c084015261286c81840186886127c0565b7fffffffff000000000000000000000000000000000000000000000000000000008c811682527fffffffffffffffff0000000000000000000000000000000000000000000000008c811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008c8116600c8501528b1660208401527fffffffffffffffffffffffffffffffff000000000000000000000000000000008a16603484015288821660448401528716604883015285166050820152605481018490525f82846074840137505f91016074019081529a9950505050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008a811682527fffffffffffffffff0000000000000000000000000000000000000000000000008a811660048401527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008a16600c8401528882166020840152871660248301528516602c820152603081018490525f82846050840137505f910160500190815298975050505050505050565b5f60208284031215612ab1575f80fd5b5051919050565b5f8251612ac981846020870161211b565b9190910192915050565b5f60208284031215612ae3575f80fd5b81518015158114612549575f80fdfea26469706673582212209830eade878440f38181a02b88cb34928ea2b4e397f26a9b6aba0ca50c05594664736f6c63430008160033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_REFERRER_DELIMITER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
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
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "relayerFeePct";
            readonly type: "int64";
            readonly internalType: "int64";
        }, {
            readonly name: "quoteTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "message";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "maxCount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
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
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPacked;
}
export {};
